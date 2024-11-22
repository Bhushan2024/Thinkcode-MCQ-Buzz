import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    
    const isLoggedIn = this.authService.isLoggedIn;

    if (!isLoggedIn) {
      
      //this.toastService.showInfo("Please login first.");
      this.router.navigate(['/login']);
      return false;
    }

    // Check if the user is authorized to access the route
    const requiredRoles = route.data['roles'] as Array<string>; // Roles required for this route
    const loggedInUser = this.authService.getLoggedInUser();

    if(loggedInUser){
      if (requiredRoles && !requiredRoles.includes(loggedInUser.role)) {
        // User is logged in but not authorized, redirect to unauthorized page
        //this.toastService.showWarning("You are not authorized to access this page.");
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }

    // User is logged in and authorized
    return true;
  }
}
