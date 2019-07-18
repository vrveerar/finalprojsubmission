define(["../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class StatusColumn extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        .col {
          background-color: rgb(102, 118, 154);
          border-radius: 5px;
          height: 75vh;
          color: whitesmoke;
          margin-bottom: 5px;
        }
        h2 {
          text-align: center;
          margin-bottom: 15px;
          font-size: 1.5em;
          text-transform: uppercase;
        }
      </style>
      <div class="col">
        <h2>[[heading]]</h2>
        <slot></slot>
      </div>
    `}static get properties(){return{heading:String,user:String,title:String,date:String,description:String,color:String}}constructor(){super()}}customElements.define("status-col",StatusColumn)});