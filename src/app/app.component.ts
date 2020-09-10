import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServersService } from './servers.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-app';
  name : string;
  x : string;

  constructor(private serversService : ServersService){}

  servers = [{ name : 'Test Server', capacity : 10, id : this.generateId()},
             { name : 'Live Server', capacity : 20, id : this.generateId()}
            ]

  generateId(){
    return Math.round(Math.random()*100)
  }

  onAddServer(name:string){
    this.servers.push({name : name, capacity : 10, id : this.generateId()})

  }

  onSave(){
    this.serversService.storeServers(this.servers).subscribe((response)=>console.log(response),(error)=>console.log(error))
  }

  onGet(){
    this.serversService.getServer().subscribe(
      // (response)=>{const data = response.json(); console.log(data)},(error)=>console.log(error))
      (servers : any[])=>{
        for (const item of servers){
          console.log(item.name)
          this.x = item.name
        }
        console.log(servers)
      },(error)=>console.log(error)
    )}

  appStatus = new Promise((resolve,reject) =>{
    setTimeout(()=>{
      resolve ('stable')
    },2000)
    })
  
}
