import { Injectable } from '@angular/core';
import { environment } from '../common/enviroment/environment.dev';

declare let gtag: any;  // グローバル変数gtagを解決

@Injectable({
  providedIn: 'root',
})
export class GaService {
  constructor() {}

  // GAの読み込みをチェック
  private useGA(): boolean {
    return typeof gtag !== undefined;
  }

  /**
   * ページトラッキング
   * @param  {string} url URLのパス。スラッシュで始まる必要がある。
   */
  sendPageView(url: string): void {
    if (!this.useGA()) {
      return;
    }
    if (!url.startsWith('/')) {
      url = `/${url}`;
    }
    if (environment.dev) {
      gtag('config', environment.analytics.id, {
        page_path: url
      });
    }
  }

  /**
   * イベントトラッキング
   * @param  {string} eventCategory (e.g. 'Video')
   * @param  {string} eventAction (e.g. 'play')
   * @param  {string} eventLabel (e.g. 'play campaign CM')
   * @param  {number} eventValue (e.g 500)
   */
  sendEvent(eventName: string, eventCategory: string, eventAction: string, eventLabel: any, eventValue: number = 0 ): void {

    console.log(eventName,eventAction,eventLabel);
    
    if (!this.useGA()) {
      return;
    }
    if (environment.dev) {
      gtag('event', eventName, {
        event_category: eventCategory,
        event_action: eventAction,
        event_label: eventLabel,
        eventValue: eventValue
      });
    }
  }
}

