import { Injectable, OnInit, signal } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AuthService implements OnInit {
    currentUserSig = signal<any | null>(null);

    async ngOnInit() {
        const token = localStorage.getItem('token');
        this.currentUserSig.set(token);
    }
}