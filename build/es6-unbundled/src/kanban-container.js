define(["../node_modules/@polymer/polymer/polymer-element.js","../node_modules/@polymer/polymer/lib/elements/dom-repeat.js","../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js","../node_modules/@polymer/paper-item/paper-item.js","../node_modules/@polymer/paper-listbox/paper-listbox.js","./status-col.js","./task-card.js"],function(_polymerElement,_domRepeat,_paperDropdownMenu,_paperItem,_paperListbox,_statusCol,_taskCard){"use strict";class KanbanContainer extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        .kanban-container {
          display: grid;
          text-align: center;
          grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
          grid-column-gap: 1em;
          padding: 70px 25px 25px;
        }
      </style>
      <div class="kanban-container">
        <status-col heading="Backlog">
          <template is="dom-repeat" items="{{tasks}}" observe="status" filter="isBacklog">
          <task-card
            id="[[item.id]]"
            user="[[item.assignedname__c]]"
            title="[[item.title__c]]"
            date="[[item.duedate__c]]"
            color="[[item.color__c]]"
          >
              <p>[[item.taskdescription__c]]</p>
            </task-card>
          </template>
        </status-col>

        <status-col heading="In Progress">
          <template is="dom-repeat" items="{{tasks}}" observe="status" filter="isInProgress">
          <task-card
            id="[[item.id]]"
            user="[[item.assignedname__c]]"
            title="[[item.title__c]]"
            date="[[item.duedate__c]]"
            color="[[item.color__c]]"
          >
              <p>[[item.taskdescription__c]]</p>
            </task-card>
          </template>
        </status-col>

        <status-col heading="Complete">
          <template is="dom-repeat" items="{{tasks}}" observe="status" filter="isComplete">
          <task-card
            id="[[item.id]]"
            user="[[item.assignedname__c]]"
            title="[[item.title__c]]"
            date="[[item.duedate__c]]"
            color="[[item.color__c]]"
          >
              <p>[[item.taskdescription__c]]</p>
            </task-card>
          </template>
        </status-col>
      </div>
    `}static get properties(){return{tasks:Array}}isBacklog(item){return"Backlog"===item.status__c}isInProgress(item){return"In Progress"===item.status__c}isComplete(item){return"Complete"===item.status__c}constructor(){super()}}customElements.define("kanban-container",KanbanContainer)});