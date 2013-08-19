http://www.mastertheboss.com/maven-hibernate-jpa/maven-and-jpa-tutorial

This isn't completely same as -U: When you have old metadata file that references to a version that does not exist in repositories, updating snapshots doesn't work. In this situation you have to check what maven binary eclipse is using and run in console /path/to/bin/mvn clean install -U to get updated metadata file.

Derby version:
http://apache-database.10148.n7.nabble.com/ANNOUNCE-Apache-Derby-10-10-1-1-released-td129386.html
Derby 10.10.1.1


http://imcryptic.wordpress.com/2011/05/31/starting-javadb-derby-network-server-from-java-application/
В Дерби нет исходных файлов в мавене


Путь к БД находится здесь:
http://db.apache.org/derby/docs/10.8/ref/rrefproper32066.html
derby.system.home
Function

Specifies the Derby system directory, which is the directory that contains subdirectories holding databases that you create and the text file derby.properties.

If the system directory that you specify with derby.system.home does not exist at startup, Derby creates the directory automatically.
Default

Current directory (the value of the JVM system property user.dir).

If you do not explicitly set the derby.system.home property when starting Derby, the default is the directory in which Derby was started.
Note: You should always explicitly set the value of derby.system.home.
Example

-Dderby.system.home=C:\derby

Атоматическое создие таблиц Hibernate
http://stackoverflow.com/questions/306806/hibernate-automatically-creating-updating-the-db-tables-based-on-entity-classes

Where do I put META-INF in Eclipse?
http://stackoverflow.com/questions/9998360/where-do-i-put-meta-inf-in-eclipse

Hibernate JPA Tutorial
http://courses.coreservlets.com/Course-Materials/hibernate.html

