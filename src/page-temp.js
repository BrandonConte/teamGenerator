const employeeCards = (employees) => {

    if (employees) {
        
        employees.map(employee => {

            if (employee.github) {

                return `
                <div class="col mb-3">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title">${employee.name}</h5>
                            <h5 class="card-title">Engineer</h5>
                        </div>
                        <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item border border-bottom-0">ID: ${employee.id}</li>
                            <li class="list-group-item border border-bottom-0">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item border">Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                `

            } else {

                return `
                <div class="col mb-3">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title">${employee.name}</h5>
                            <h5 class="card-title">Intern</h5>
                        </div>
                        <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item border border-bottom-0">ID: ${employee.id}</li>
                            <li class="list-group-item border border-bottom-0">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item border">School: ${employee.school}</li>
                        </ul>
                        </div>
                    </div>
                </div>
                `
            }

    
        });
    } 
};


const generatePage = (manager, employees) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
    <header>
        <nav class="navbar navbar-light bg-light mb-5">
            <div class="d-flex justify-content-center container-fluid">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
    </header>
    <main>
        <section>
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div class="col mb-3">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">${manager.name}</h5>
                                <h5 class="card-title">Manager</h5>
                            </div>
                            <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item border border-bottom-0">ID: ${manager.id}</li>
                                <li class="list-group-item border border-bottom-0">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                                <li class="list-group-item border">Office number: ${manager.officeNum}</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    ${employeeCards(employees)}
                </div>
            </div>
        </section>
    </main>
        
    </body>
    </html>
    `
};

module.exports = generatePage;