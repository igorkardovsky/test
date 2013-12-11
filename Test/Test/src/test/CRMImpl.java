package test;

public  class CRMImpl implements CRM{
	
	private OMS oms;
	@Override
	public void startOrderVerifitcation(int orderId) {
		System.out.println("Handled order "+orderId);
		oms.stopOrderVerifitcation(orderId);
		
	}
	public OMS getOms() {
		return oms;
	}
	public void setOms(OMS oms) {
		this.oms = oms;
	}
	
	
	
}