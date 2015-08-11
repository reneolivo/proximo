import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Próximo';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title:'Home' }
    ]);

    this.router = router;
  }
}
