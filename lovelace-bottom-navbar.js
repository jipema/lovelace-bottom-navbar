class BottonNavbar {
  constructor() {
    this.version = '0.0.1';

    //retrieve dom elements
    this.ha = document.querySelector('home-assistant');
    this.main = this.ha && this.ha.shadowRoot.querySelector('home-assistant-main').shadowRoot;
    this.panel = this.main && this.main.querySelector('ha-panel-lovelace');
    this.lovelace =
      this.panel && this.panel.shadowRoot.querySelector('hui-root').shadowRoot.querySelector('ha-app-layout');
    this.view = this.lovelace && this.lovelace.querySelector('#view');
    this.header = this.lovelace && this.lovelace.querySelector('app-header');
    this.toolbar = this.header && this.header.querySelector('app-toolbar');
    if (!this.header || !this.header.style || !this.view || !this.view.style || !this.toolbar || !this.toolbar.style)
      return;

    //detect iOS companion App
    this.isIosApp =
      navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('Mobile/HomeAssistant') > 0;

    //header position / ios padding
    if (this.isIosApp) this.toolbar.style.paddingBottom = '30px';
    this.header.style.top = 'auto';
    this.header.style.bottom = '0px';

    //view position/size based on header height
    const rect = this.header.getBoundingClientRect();
    this.view.style.transform = `translateY(-${rect.height}px)`;
    this.view.style.minHeight = `calc(100vh - ${rect.height}px)`;

    console.info(`%cBOTTOM-NAVBAR ${this.version} IS INSTALLED`, 'color: green; font-weight: bold', '');
  }
}

// Initial Run
Promise.resolve(customElements.whenDefined('hui-view')).then(() => {
  window.BottonNavbar = new BottonNavbar();
});
