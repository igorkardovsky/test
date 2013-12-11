package test;

import java.util.Collection;
import java.util.Vector;

import org.activiti.bpmn.model.BaseElement;
import org.activiti.bpmn.model.UserTask;
import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.TaskListener;
import org.activiti.engine.impl.bpmn.parser.BpmnParse;
import org.activiti.engine.parse.BpmnParseHandler;

//https://github.com/jbarrez/activiti-advanced-scripting/blob/master/src/test/java/org/activiti/ExecuteScriptOnTaskCompleteBpmnParseHandler.java
//https://github.com/jbarrez/activiti-advanced-scripting/blob/master/src/test/java/org/activiti/AsyncScriptTaskListener.java

public class MyHandler implements BpmnParseHandler,TaskListener {

	@Override
	public Collection<Class<? extends BaseElement>> getHandledTypes() {
		// TODO Auto-generated method stub
		Vector<Class<? extends BaseElement>> v = new Vector<Class<? extends BaseElement>>();
		v.add( org.activiti.bpmn.model.UserTask.class);
		v.add( org.activiti.bpmn.model.ManualTask.class);
		return v;
		
	}

	@Override
	public void parse(BpmnParse bpmnParse, BaseElement element) {
		

		
	}

	@Override
	public void notify(DelegateTask delegateTask) {
		// TODO Auto-generated method stub
		
	}

}
