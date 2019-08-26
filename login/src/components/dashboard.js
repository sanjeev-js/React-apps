import React from "react";
import Sidebar from "react-sidebar";
import Header from './header';
import Footer from './footer'
import Table from './table'

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div>
      <Header />
      <Table />
      <Footer />
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "yellow" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
      </div>
    );
  }
}

export default DashBoard;