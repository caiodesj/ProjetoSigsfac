import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  hostApi = environment.hostApi;
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>(this.hostApi, data);
  }

  getProduct() {
    return this.http.get<any>(this.hostApi);
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>(`${this.hostApi}/${id}`, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.hostApi}/${id}`);
  }
}
