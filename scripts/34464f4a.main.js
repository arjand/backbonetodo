window.backbonetodo={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";this.Collections=new backbonetodo.Collections.TodosCollection,new backbonetodo.Views.TodosView({collection:this.Collections})}},$(document).ready(function(){"use strict";backbonetodo.init()}),this.JST=this.JST||{},this.JST["app/scripts/templates/todo.ejs"]=function(obj){obj||(obj={});var __t,__p="";with(_.escape,obj)__p+='\n	<input type="checkbox" '+(null==(__t=checked?"checked":"")?"":__t)+" >\n	<span "+(null==(__t=checked?'class="todoCompleted"':"")?"":__t)+">"+(null==(__t=text)?"":__t)+"</span>\n\n";return __p},this.JST["app/scripts/templates/todos.ejs"]=function(obj){obj||(obj={});var __p="";with(_.escape,obj)__p+="<p>Your content here.</p>\n\n";return __p},backbonetodo.Models=backbonetodo.Models||{},function(){"use strict";backbonetodo.Models.TodoModel=Backbone.Model.extend({defaults:{checked:!1,text:""},validate:function(a){return a.text?void 0:"Every todo needs text."}})}(),backbonetodo.Collections=backbonetodo.Collections||{},function(){"use strict";backbonetodo.Collections.TodosCollection=Backbone.Collection.extend({model:backbonetodo.Models.TodoModel})}(),backbonetodo.Views=backbonetodo.Views||{},function(){"use strict";backbonetodo.Views.TodoView=Backbone.View.extend({tagName:"li",events:{"click input":"toggleTodo"},template:JST["app/scripts/templates/todo.ejs"],initialize:function(){this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"change:checked",this.toggleChecked)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this},toggleTodo:function(){this.model.set({checked:!this.model.get("checked")})}})}(),backbonetodo.Views=backbonetodo.Views||{},function(){"use strict";backbonetodo.Views.TodosView=Backbone.View.extend({el:"#backbonetodo",events:{"click #add-todo":"createTodo"},template:JST["app/scripts/templates/todos.ejs"],initialize:function(){this.$input=$("form input"),this.$todos=$("#todos"),this.listenTo(this.collection,"add",this.addTodo)},render:function(){var a=this.model.get("todos");return _.each(a,function(a){var b=new backbonetodo.Views.TodoView({model:a});this.$el.append(b.render().el)}),this},flushFromDom:function(){return{checked:!1,text:this.$input.val().trim()}},createTodo:function(a){a.preventDefault(),this.collection.add(this.flushFromDom()),this.$input.val("")},addTodo:function(a){console.log("add called");var b=new backbonetodo.Views.TodoView({model:a});this.$todos.append(b.render().el)}})}();