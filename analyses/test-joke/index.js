module.exports =  async function(input, config, visualisation) {
    return new Promise(async (resolve, reject) => {
        /**
         * TODO: Implement your analysis logic here.
         *
         * You can use visualisation to create an html visualisation-
         *
         * Call 'resolve' with the visualisation of your analysis.
         * */

        resolve(`<h1>${input['install-test'].joke}</h1>`);
    });
}