define([
    "jquery" , "underscore" , "backbone", "jquery.couch"
       , "collections/snippets" , "collections/my-form-snippets"
    , "views/tab" , "views/my-form", "views/loading-progress"
    , "text!data/n2.json", "text!data/n2attributes.json"
    , "text!templates/app/render.html", "text!templates/app/about.html"
    , "text!templates/app/loading.html"
   ], function(
    $, _, Backbone, Couch
  , SnippetsCollection, MyFormSnippetsCollection
       , TabView, MyFormView, ProgressBar
    , n2mandatoryJSON,  attributesJSON
    , renderTab, aboutTab, loadingTab
   ){
  return {
    initialize: function(){

	new TabView({
	    title: "Attributes"
	  , collection: new SnippetsCollection(JSON.parse(attributesJSON))
	});

	new TabView({
            title: "Rendered"
            , content: renderTab
	});
    new TabView({
        title: "About"
        , content: aboutTab
      });
    new TabView({
            title: "Loading Schemas"
            , content: loadingTab
            , dropdown: true
          });
      //Make the first tab active!
      $("#components .tab-pane").first().addClass("active");
      $("#formtabs li").first().addClass("active");
	// Bootstrap "My json" with 'info json' snippet.
  new MyFormView({
        title: "Original"
        , collection: new MyFormSnippetsCollection(JSON.parse(n2mandatoryJSON))
  });

	new ProgressBar();

	//$.couch.urlPrefix = "http://localhost:5984"
	//$.couch.info({
	  //  success: function(data) {
	//	console.log(data);
	  //  }
//	});

    }
  }
});
