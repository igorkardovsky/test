import java.io.File;


public class FileUtil {
	
	public static void clearFile(File f, boolean clear){
		for(File ff: f.listFiles()){
			if (ff.isFile()){
				System.out.println("Deleting "+ff.getAbsolutePath());
				ff.delete();
			}
			else{
				clearFile(ff,true);
			}
		};
		if(clear)
		f.delete();
	}
	
	public static void clearDir(String dirName){
		File f = new File(dirName);
		System.out.println(f.getAbsolutePath());
	
		if (!f.exists()){
			f.mkdir();
		}
		else
		{
			clearFile(f,false);
		};
		
		
	}

}
