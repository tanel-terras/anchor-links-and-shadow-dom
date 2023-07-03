const template = document.createElement("template");
template.innerHTML = /*html*/`
  <style>
    * {
      font-size: 14px
      display: block;
    }

    :host {
      display: block;
      margin-block: 2rem;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 6rem;
      height: 2rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  </style>
  <button>Button 1</button>
  <span>Content</span>
  <button>Button 2</button>`;

class RegularContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("regular-content", RegularContent);
