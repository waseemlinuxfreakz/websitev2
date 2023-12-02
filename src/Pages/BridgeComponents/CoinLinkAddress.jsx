import React, { Component } from 'react';
import Copy from '../../assets/img/copy.svg';
import Copyalert from '../../assets/img/copyalert.svg';


class CoinLinkAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupVisible: false,
    };
  }

  copyToClipboard = () => {
    const linkToCopy = 'https://example.com';

    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        this.setState({ isPopupVisible: true });

        // Hide the popup after 3 seconds
        setTimeout(() => {
          this.setState({ isPopupVisible: false });
        }, 700);
      })
      .catch((err) => {
        console.error('Error copying link to clipboard: ', err);
      });
  };

  render() {
    return (
      <>
        <a className="copyAddress" onClick={this.copyToClipboard}>
          <img src={Copy} alt="Copy" />
        </a>

        {this.state.isPopupVisible && (
          <div className="Copyalert">
            <img src={Copyalert} alt="Copyalert" />
          </div>
        )}
      </>
    );
  }
}

export default CoinLinkAddress;
