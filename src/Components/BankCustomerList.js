import React from 'react';

function CustomerListfun (){
    const customerList = [
        {CustomerName : "Mani",
         CustomerAccNo : 454,
         CustomerPanNo : 'DPKG122',
         CustomerAccBalance : 10000
        },
        {CustomerName : "Maran",
         CustomerAccNo : 443,
         CustomerPanNo : 'DPKG145',
         CustomerAccBalance : 20000
        },
        {CustomerName : "Dharu",
         CustomerAccNo : 555,
         CustomerPanNo : 'DPKG342',
         CustomerAccBalance : 120000
        },
        {CustomerName : "Rohit",
         CustomerAccNo : 455,
         CustomerPanNo : 'DPKG264',
         CustomerAccBalance : 1550000
        }
    ]
    
    const customerreport = customerList.map(value=>
        <h3>
            Name : {value.CustomerName} <br/>
            ACC no : {value.CustomerAccNo}<br/>
            PAN no :{value.CustomerPanNo}<br/>
            Balance : {value.CustomerAccBalance}
            </h3>)

    return (
        <div>
          {customerreport}
        </div>
    )
}
export default CustomerListfun;

