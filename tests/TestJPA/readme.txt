http://www.mastertheboss.com/maven-hibernate-jpa/maven-and-jpa-tutorial

This isn't completely same as -U: When you have old metadata file that references to a version that does not exist in repositories, updating snapshots doesn't work. In this situation you have to check what maven binary eclipse is using and run in console /path/to/bin/mvn clean install -U to get updated metadata file.

Derby version:
http://apache-database.10148.n7.nabble.com/ANNOUNCE-Apache-Derby-10-10-1-1-released-td129386.html
Derby 10.10.1.1