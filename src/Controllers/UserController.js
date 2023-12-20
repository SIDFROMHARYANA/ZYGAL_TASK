

const users = [
  { email_id: 'sid@gmail.com', password: '1234' },
  { email_id: 'naveen@gmail.com', password: '9876' },
];


   const login = async function (req, res)  {

  const { email, password } = req.body;

  const user =  users.find(
    (user) => user.email_id === email && user.password === password
  );

  if (user) {
    res.redirect('/home');
  } 
  else {
    res.redirect('/login');
  }
};

  
 
const submit = async function (req, res)  {

const data = req.body.data;

res.cookie('userData', data);
};

 const search = async function (req, res)  {
  
  const searchData = req.body.searchData;
  const storedData = req.cookies.userData ;
 
  const match = storedData.includes(searchData);

  if (match) {
    res.send(`Matching data: ${storedData}`);
  } 
  else {
    res.send('No matching data found.');
  }
};

const clear = async function (req, res)  {
  
  res.clearCookie('userData');
};

const logout = async function (req, res) {
  
  req.session.destroy();
  res.redirect('/login');
}

module.exports.login = login
module.exports.submit = submit
module.exports.seacrh = search
module.exports.clear = clear
module.exports.logout = logout








