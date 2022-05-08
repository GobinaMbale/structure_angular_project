import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EventManager} from '../../shared/service/event-manager.service';
import {Router} from '@angular/router';
import {StateStorageService} from '../../core/auth/state-storage.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {AccountService} from '../../core/auth/account.service';
import {LoginService} from './login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  @ViewChild('username', { static: false })
  username?: ElementRef;

  authenticationError: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private accountService: AccountService,
    private eventManager: EventManager,
    private loginService: LoginService,
    private stateStorageService: StateStorageService,
  ) {}

  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
    rememberMe: [true]
  });

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
    window.dispatchEvent(new Event('resize'));
    if (this.username) {
      this.username.nativeElement.focus();
    }
    if (this.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  cancel() {
    this.authenticationError = false;
    this.loginForm.patchValue({
      username: '',
      password: ''
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.spinner.show();
    this.loginService
      .login({
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
        rememberMe: this.loginForm.get('rememberMe').value
      })
      .subscribe(() => {

        this.accountService.identity().subscribe(account => {
          this.authenticationError = false;
          if (this.router.url === '/login' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
            this.router.navigate(['/dashboard']);
          }
          this.spinner.hide();
          this.eventManager.broadcast({
            name: 'authenticationSuccess',
            content: 'Sending Authentication Success'
          });
          // previousState was set in the authExpiredInterceptor before being redirected to login modal.
          // since login is successful, go to stored previousState and clear previousState
          const redirect = this.stateStorageService.getUrl();
          if (redirect) {
            this.stateStorageService.storeUrl(null);
            this.router.navigateByUrl(redirect);
          }

        });
      }, () => {
        this.spinner.hide();
        this.authenticationError = true;
      });
  }
}
