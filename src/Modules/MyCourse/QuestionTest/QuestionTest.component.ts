import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-QuestionTest',
  templateUrl: './QuestionTest.component.html',
  styleUrls: ['./QuestionTest.component.css']
})
export class QuestionTestComponent implements OnInit {

  response: any; // Variable to hold the API response data
  currentQuestionIndex: number = 0; // Index of the current question
  selectedChoices: any[] = []; // Array to store selected choices
  spinner:number=0;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAllQuestionsInTest();
  }

  getAllQuestionsInTest() {
    const testId = localStorage.getItem("QuestionTestId");
    if (testId) {
      this.http.get<any>(`${environment.apiUrl}api/QuestionTest/getAllQuestionTest?TestId=${testId}`)
        .subscribe(
          res => {
            if(res.success===false){
              this.router.navigate(['/Degree']);
            }
            this.response = res;
            console.log(this.response); // Log the response for debugging
          },
          error => {
            console.error('Error fetching questions:', error);
            // Handle error and provide user feedback
            alert("Error occurred while fetching questions. Please try again.");
          }
        );
    } else {
      console.error('Invalid chapter ID.');
      // Handle invalid chapter ID scenario
    }
  }

  onSelect(choice: any) {
    // Save the selected choice for the current question
    this.selectedChoices[this.currentQuestionIndex] = choice;
  }

  goToNextQuestion() {
    // Navigate to the next question
    if (this.currentQuestionIndex < this.response.values.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  goToPreviousQuestion() {
    // Navigate to the previous question
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
  parseChoices(choicesString: string): any[] {
    try {
      return JSON.parse(choicesString); // Parse the choices string into an array of objects
    } catch (error) {
      console.error('Error parsing choices:', error);
      return [];
    }
  }
  degree:number=0;
  onSubmit() {
    for (let index = 0; index < this.response.values.length; index++) {
      if(this.response.values[index].ansure===this.selectedChoices[index]){
        this.degree+=1;
      }
    }
    alert("Your degree is : "+this.degree+" / "+ this.response.values.length);
    const testId = localStorage.getItem("QuestionTestId");


    this.http.post<any>(`${environment.apiUrl}api/CorrectTest/CorrectTest2?degree=${this.degree}&TestId=${testId}`,null)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/Degree']);
      },
      error=>{
        alert("error");
        console.log(error);
      }
    )
  }
}
