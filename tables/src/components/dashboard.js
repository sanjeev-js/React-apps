import React from "react";
import Header from './header';
import Footer from './footer'
import Table from './table'
import Search from './searchbox'

class DashBoard extends React.Component {

  render() {
    return (
      <div>
      <Header />
      <Table />
      <Search />
      <Footer />
      </div>
    );
  }
}

export default DashBoard;