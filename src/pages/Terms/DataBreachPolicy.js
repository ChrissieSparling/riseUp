import { Button, yellow } from '@material-ui/core/index';
import React from 'react'
import "./Terms.css"

const styles = {
  h1: {
    marginTop: '30px',
    color: 'Black',
    backgroundColor: 'yellow',
    hover: 'orange',
  },
  p: {
    fontSize: '12px',
    hover: 'yellow',
  },
}

export function DataBreachPolicy (){
  return (
  <container>
    <div className='d-flex row justify-content-center'>
      <h1 style={styles.h1} className='col-12'>WeRiseUpToday Data Breach or Imminent Breach Procedures</h1>
      <p style={styles.p} className='col-10'>
        Please read how we store data carefully before agreeing to our use of stored data.
        <br />We here at WeRiseUPToday think it's important for you to undWeRiseUpToday Data Breach or Imminent Breach Procedures

            WERISEUPTODAY Data Breach Policy and Procedures
            <br />
            WERISEUPTODAY has implemented the following procedures to follow in the event of a data breach involving personally identifying information PII or other confidential information maintained on personal computers, WeRiseUpToday networks, or internet programs used by staff and volunteers.  
            <br />
            The following staff have key responsibility for implementing and executing the data breach procedures:
•	        <br />weriseuptoday@gmail.com
            <br />In an effort to prevent a breach of data and PII, WERISEUPTODAY has implemented the following measures to prevent the breach of data:
        •	 <br />TECHNICAL SUPPORT SERVICE PROVIDER
        •	 <br />INSTALLED ANTI-VIRUS, INTRUSION NOTIFICATION SOFTWARE
        •	 <br />WERISEUPTODAY PROCEDURES FOR PERSONAL ACCESS AND USE OF WERISEUPTODAY COMPUTERS
        •	 <br />LAW ENFORCEMENT SUPPORT TO LOCATE AND APPREHEND PERPEETRATORS.  
            <br /> WERISEUPTODAY has identified the following items as critical systems and files that will be uploaded to a back-up system on a DAILY/WEEKLY/MONTHLY basis:
        •	 <br />CLIENT DATA FILES
        •	 <br />CLIENT CASE FILES 
        •	 <br />WERISEUPTODAY FINANCIAL RECORDS
        •	 <br />OTHER CRITICAL/CONFIDENTIAL INFORMATION
            </p>
            <p>
            In the event of a data breach or imminent breach of PII data, in order to contain the data breach and minimize the extent of the intrusion:
            <br />
        •	 <br />Disconnect the affected and related systems or networks from Internet access. 
        •	 <br />Contact 1st/ 2nd RESPONDER to notify them of the data breach or imminent breach of PII data.
        •	 <br />Document date and time the breach occurred, what files the user was accessing at the time of the breach, the breach team member contacted, and actions taken to secure data.
        •	 <br />Contact technical support to detect and remove the malware or other information related to the breach.
        •	 <br />Notify the staff at WeRiseUpToday within 24 hours of the breach occurrence or detection of breach/recognition of imminent breach.
        •	 <br />Review virus/malware/other protective software to review system vulnerabilities and increase the level of protection for the system.
        •	 <br />If possible, reimage the system and restore from backup files. 
                <br />
                </p>
                <p>
                Within 24 hours of the breach the Project Director DESIGNATED STAFF must notify the staff at GCC of the data breach, to forward the information to appropriate staff at the federal funding level. 
                <br />
                Following the incident, WERISEUPTODAY staff will review procedures to determine if any actions by the user or the team contributed to the data breach.  Staff will be updated on policies to protect against data breaches or imminent breaches of PII data. 
                <br />
                A computer technician will review software, updates, and software/data protection programs to improve the security of the data and operating system to prevent further incidents. Information related to the data breach will be documented on the incident log, repairs or modifications implemented will be included on the log and kept in a secure location. 
                <br /> 
                If necessary, the management team will review procedures and make necessary changes to the procedures to improve the security of PII and other secure information.  
                </p>
        
                <br />
                <strong>© WeRiseUpToday 2022</strong>
          </div>
          <a href="/signup" target="_blank">
          <Button class="btnLogSign"> Sign up</Button>
        </a>
    </container>
  )
}

export default DataBreachPolicy

