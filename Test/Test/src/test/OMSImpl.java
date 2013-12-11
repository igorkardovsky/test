package test;

import java.util.List;

import org.activiti.engine.EngineServices;
import org.activiti.engine.delegate.DelegateExecution;
import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.ExecutionListener;
import org.activiti.engine.delegate.TaskListener;
import org.activiti.engine.task.Task;

public class OMSImpl implements OMS,ExecutionListener{
	CRMImpl si;
	EngineServices serv;
	public OMSImpl(){
		si = new CRMImpl();
		si.setOms(this);
	}


	@Override
	public void stopOrderVerifitcation(int orderId) {
		//serv.getRuntimeService().createExecutionQuery().processDefinitionKey("").variableValueEquals("orderId", orderId)
		Task t = serv.getTaskService().createTaskQuery().processDefinitionKey("myProcess").processVariableValueEquals("orderId", orderId).singleResult();
		serv.getTaskService().complete(t.getId());
		
	}
	@Override
	public void notify(DelegateExecution execution) throws Exception {
		serv=execution.getEngineServices();
		System.out.println("===Event===");
	//	int i = (int)execution.getVariable("orderId");
		System.out.println("Event: "+execution.getEventName());
		List<Task> lt = serv.getTaskService().createTaskQuery().list();
		for(Task t:lt){
			System.out.println("===Task===");
			System.out.println("id"+t.getId());
			System.out.println("name"+t.getName());
			System.out.println("execId"+t.getExecutionId());
			System.out.println("ProcInstId"+t.getProcessInstanceId());
		}
		//serv.getTaskService().complete(t.getId());
	//	si.startOrderVerifitcation(i);
		
	}
	
}