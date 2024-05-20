import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements   OnInit {
  email: string = '';
  message: string = '';

  constructor(private route: ActivatedRoute, private emailService: EmailService) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email') || '';
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.emailService.sendEmail(this.email, this.message).subscribe(
        response => {
          alert(`Message envoyé à ${this.email}: ${this.message}`);
          this.message = '';
        },
        error => {
          console.error('Erreur:', error);
          alert('Une erreur s\'est produite lors de l\'envoi de l\'email.');
        }
      );
    } else {
      alert('Veuillez écrire un message avant d\'envoyer.');
    }
  }
}