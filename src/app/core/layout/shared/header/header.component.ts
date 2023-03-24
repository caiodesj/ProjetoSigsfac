import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { BottomSheetComponent } from "../../../../shared/bottom-sheet/bottom-sheet.component";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(
    private _bottomSheet: MatBottomSheet,
    public authService: AuthService,
    private Router: Router
  ) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  logout() {
    this.authService.signOut().subscribe(() => {
      this.Router.navigate(["login"]);
    });
  }
}
