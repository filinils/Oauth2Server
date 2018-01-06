const settings = {
	dbName: "<dbname>",
	username: "<username>",
	password: "<password>"
};
const serverUrl = {
	serverUrl: `<concatedServerurl>`
};

exports.dbSettings = Object.assign({}, settings, serverUrl);
