import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.InetAddress;

import org.apache.derby.drda.NetworkServerControl;



public class DerbyServer {

	public static void main(String[] args) throws Exception {

		NetworkServerControl serverControl=new NetworkServerControl(InetAddress.getByName("localhost"),1527);
		System.setProperty("derby.system.home", "data");
		serverControl.start(new PrintWriter(System.out,true));
		 BufferedReader in
		   = new BufferedReader(new InputStreamReader(System.in));
		 in.readLine();
		 serverControl.shutdown();

	}

}
