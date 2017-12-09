import { Component } from '@angular/core'

@Component({
    selector: 'events-app',
    template: '<h2> Hello, {{name}}</h2><div><my-products></my-products></div>'
})

export  class EventsAppComponent{
    name: string ="Nipun";
}