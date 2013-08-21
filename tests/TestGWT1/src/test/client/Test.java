package test.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.AbsolutePanel;

/**
 * HelloWorld application.
 */
public class Test implements EntryPoint {

  public void onModuleLoad() {

    RootPanel rootPanel = RootPanel.get();
    Button b = new Button("Click me", new ClickHandler() {
      public void onClick(ClickEvent event) {
        Window.alert("Hello, AJAX!");
      }
    });
    rootPanel.add(b);
   // b.setWidth("139px");
  }
}