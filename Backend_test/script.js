


  // Load the API client and set the API key
  gapi.load('client', init);

  function init() {
    gapi.client.init({
      apiKey: 'AIzaSyCuOtWQXrDQEjDYuqhtEFo5RwSdroxqFW8',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
      // API is loaded, you can now use gapi.client.sheets
      // Call your desired API functions here
      appendValues();
    });
  }

  function appendValues() {
    var spreadsheetId = '1T4FPeyoCrTCYD-3eKLgFa3Ix4yqqYwnqboBYIwH2_qs';
    var range = 'Sheet1!A1:B2'; // Example range, modify as needed
    var values = [
      ["NewValue1", "NewValue2"],
      ["NewValue3", "NewValue4"]
    ];

    var body = {
      values: values
    };

    gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: 'RAW',
      resource: body,
    }).then(function (response) {
      console.log('Values appended successfully:', response);
    }, function (reason) {
      console.error('Error: ' + reason.result.error.message);
    });
  }
