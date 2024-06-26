module.exports = (connection, DataTypes) => {
	const schema = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		condition: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ageRange: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		postcode: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		borrowPeriod: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		userUid: {
			type: DataTypes.STRING,
			allowNull: true,
		}
	};
	const ToyModel = connection.define("Toy", schema);
	return ToyModel;
};
