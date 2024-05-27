import { Component, computed, effect, inject, signal } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { User } from '../../../core/models/user.mode';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.scss',
})
export class UserInfoPageComponent {
  private usersService = inject(UsersService);
  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  public fullName = computed<string>(() => {
    if (!this.currentUser()) return 'Usuario no encontrado';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });


  constructor(){
    effect(() => {
      console.log('ejecutando efecto');
    this.loadUser(this.userId());
    })
  }

  // ngOnInit(): void {
  //   this.loadUser(this.userId());
  // }

  loadUser(id: number) {
    if (id <= 0) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.usersService.getUserById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: () => {
        this.userWasFound.set(false);
        this.currentUser.set(undefined);
      },
    });
  }
}

