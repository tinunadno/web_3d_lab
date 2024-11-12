mvn clean > mvnlog.log
mvn package >> mvnlog.log
cp target/*.war /home/yura/Applications/wildfly/wildfly-34.0.0.Beta1/standalone/deployments

