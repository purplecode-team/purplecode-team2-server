const model = require("../models")

const getMajor = async (req, res, next) => {
    try {
        const result2 = await model.College.findAll({
            include: [
                {
                    model: model.Major,
                    attributes: ['id', 'majorName'],
                    include: [
                        {
                            model: model.Team,
                            attributes: ['id', 'order', 'slogan'],
                            include: [
                                {
                                    model: model.Runner,
                                    attributes: ['id', 'name', 'major', 'studentNum', 'position', 'picture', 'teamId']
                                }
                            ]
                        }
                    ]
                }
            ]
        })
        return res.json(result2);
    } catch (e) {
        console.log("error!!")
    }
}


const getCollege = async (req, res, next) => {
    try {
        const result2 = await model.College.findAll({
            include: [
                {
                    model: model.Team,
                    attributes: ['id', 'order', 'slogan'],
                    include: [
                        {
                            model: model.Runner,
                            attributes: ['id', 'name', 'major', 'studentNum', 'position', 'picture', 'teamId']
                        }
                    ]

                }
            ]
        })
        return res.json(result2);
    } catch (e) {
        console.log("error!!")
    }
}


const getCentral = async (req, res, next) => {
    try {
        const result2 = await model.Central.findAll({
            include: [
                {
                    model: model.Team,
                    attributes: ['id', 'order', 'slogan'],
                    include: [
                        {
                            model: model.Runner,
                            attributes: ['id', 'name', 'major', 'studentNum', 'position', 'picture', 'teamId']
                        }
                    ]

                }
            ]
        })
        return res.json(result2);
    } catch (e) {
        console.log("error!!")
    }
}

const renameKey = (object, key, newKey) => {
    return {'id':object['id'], [newKey] : object[key]}
};

const getSearchCategory = async (req, res, next) => {
    try {
        let centralResult = await model.Central.findAll();
        let collegeResult = await model.College.findAll();
        let majorResult = await model.Major.findAll({
            attributes: ['id', 'majorName']
        })

        centralResult = centralResult.map((res) =>
            renameKey(res['dataValues'], "centralName", "name")
        )
        collegeResult = collegeResult.map((res) => {
            return renameKey(res['dataValues'], "collegeName", "name")
        })
        majorResult = majorResult.map((res) => {
            return renameKey(res['dataValues'], "majorName", "name")
        })

        let result = collegeResult.concat(centralResult);
        result = result.concat(majorResult);

        return res.json(result);
    } catch (e) {
        console.log(e)
    }
}


module.exports = {getMajor, getCollege, getCentral, getSearchCategory}