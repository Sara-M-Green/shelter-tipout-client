# Turbo Tips

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Link

https://shelter-tip-out-client.vercel.app/

## Summary
Turbo Tips was built to solve a problem regarding tip out calculations at Shelter Distilling. Shelter Distilling bartenders pool all of the tips collected daily, then distribute tips out to employees in other departments based on sales. These sales numbers are pulled from our POS device. After tipping out the neccesary departments, the remaining tips are divided between the bartenders on an hourly scale.

Each evening, the closing bartender is responsible for filling out a tip form, manually doing math to calculate the correct tip amounts. This tip form is put into a binder, and at the end of the pay period, the manager manually calculates an accumulated tip total for each employee to submit to payroll. 

Turbo Tips eliminates the manual math calculations which are often accompanied with errors. It also calculates an accumulated tip total for each employee in a specified date range which saves management time, and again, rids the potential for human error.

### Example
Total CC Tips: $739.88
Total Food Sales: $1042.00
Total Cocktail Sales: $2065.05
Total Sales During Busser Shift: $3903.14
    Bussers Worked: Fernanda G - 7hrs
                    Jesus - 5hrs
Total Sales During Busser Shift: $3326.50
    Barback Worked: Maddy
    Bottles Sold: 2
Bartenders Worked: 
    Steph - 6hrs
    Sara - 7.5hrs
    Cam - 5.5hrs

### API Documentation

Turbo Tips Api solicites two endpoints:
/employees & /tips.

The 'Tip Calculator' page makes use of both endpoints. 
For each department with more than one employee, a GET request is made to the /employees/:dept_id endpoint. This request retrieves all employees from a specific department, and populates those employee names in the respective drop down menu.
The 'Tip Calculator' sends a post request to /tips which contains a json object for each employee receiving tips in the format of tip_date, emp_id, bottles sold, and tips earned.

The 'View Tips' page of the app also utilizes both endpoints. It populates the 'Select Employee' drop down with a GET request to /employees. This returns all employees in the database.

'View Tips' also makes a GET request to /tips. This request returns all of the tip objects in an array, which is then filtered by selecting starting and ending dates and an employee's name. The filtered array is then displayed in a table created using React Table.


### Screenshots




