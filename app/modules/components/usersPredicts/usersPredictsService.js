'use strict';

UsersPredictsService.$inject = [];
function UsersPredictsService () {

    const getUserDetails = ( {name, qulificationPrediction, gamesPredictions} ) => {
        return {
            name,
            gamesPredictions,
            champion: qulificationPrediction.champion.firstPlace,
            runnerUp: qulificationPrediction.champion.secondPlace,
            groups: [
                [
                    {title: 'Group A winner:', value: qulificationPrediction.A.firstPlace},
                    {title: 'Group A runner up:', value: qulificationPrediction.A.secondPlace}
                ],
                [
                    {title: 'Group B winner:', value: qulificationPrediction.B.firstPlace},
                    {title: 'Group B runner up:', value: qulificationPrediction.B.secondPlace}
                ],
                [
                    {title: 'Group C winner:', value: qulificationPrediction.C.firstPlace},
                    {title: 'Group C runner up:', value: qulificationPrediction.C.secondPlace}
                ],
                [
                    {title: 'Group D winner:', value: qulificationPrediction.D.firstPlace},
                    {title: 'Group D runner up:', value: qulificationPrediction.D.secondPlace}
                ],
                [
                    {title: 'Group E winner:', value: qulificationPrediction.E.firstPlace},
                    {title: 'Group E runner up:', value: qulificationPrediction.E.secondPlace}
                ],
                [
                    {title: 'Group F winner:', value: qulificationPrediction.F.firstPlace},
                    {title: 'Group F runner up:', value: qulificationPrediction.F.secondPlace}
                ]
            ]
        };
    };

    return {
        getUserDetails
    };
}

module.exports = UsersPredictsService;