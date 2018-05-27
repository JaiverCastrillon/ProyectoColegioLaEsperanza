import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicar-retos-acordeon',
  templateUrl: './publicar-retos-acordeon.component.html',
  styleUrls: ['./publicar-retos-acordeon.component.css']
})
export class PublicarRetosAcordeonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  desplegar() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
  }

  addElement () { 
  
    var newButton = document.createElement("button");
    newButton.setAttribute("class", "accordion")  
    var t = document.createTextNode("CLICK ME");
    newButton.appendChild(t);     
    // create a new div element 
    var newDiv = document.createElement("div"); 
    newDiv.className="panel";
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
  
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1"); 
  
    document.body.insertBefore(newButton, currentDiv); 
    document.body.insertBefore(newDiv, currentDiv); 
    
  }

}
