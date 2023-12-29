import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../user.service";
import { UserData } from "../../UserData";

@Component({
  selector: "app-result-search",
  templateUrl: "./result-search.component.html",
  styleUrls: ["./result-search.component.scss"],
})
export class ResultSearchComponent implements OnInit {
  loading: boolean = false;
  userdata: UserData = {
    id: 0,
    name: "",
    nickname: "",
    bio: "",
    login: "",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    company: "",
    location: "",
    avatar_url: "",
    created_at: "",
    updated_at: "",
  };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true; // Inicia o carregamento
    const loginID = this.route.snapshot.paramMap.get("id");

    this.userService.searchId(loginID).subscribe(
      (user: UserData) => {
        this.userdata = user;
        this.loading = false; // Marcar que o carregamento foi concluído
      },
      (error: any) => {
        console.error("Error fetching user data!");
        this.loading = false;
      }
    );
  }
}
