import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  translate = inject(TranslateService);

  title = 'ng-i18n-demo';
  param = { title: this.title };
  browserLang? = '';

  ngOnInit() {
    // 如果找不到選擇的語系時，會將此設定做為預設
    this.translate.setDefaultLang('zh-tw');
    // 依據瀏覽器判斷語言
    this.browserLang = this.translate.getBrowserLang();
    this.translate.use(this.browserLang!);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}





