const { response } = require("express");
const Thought = require("../model/Thought");

module.exports = {
    async dashboard(request, response){
        const thought = await Thought.findAll({raw: true});
        return response.render("thoughts/dashboard", { thoughts });
    },

    async registerThought(request,response) {
        return response.render("thoughts/register"); 
    },

    async createThought(request, reponse) {
        const { title, description } = request.body

        const thought = await Thought.create({title, description});

        try{
            if(thought) {
                return response.redirect("thoughts/dashboard");
            }
        }catch(error) {
            console.error(error)
        }

        create({title, description});
    },

    async showPageEditThought(request, response) {
        const { id } = request.params;

        const thought = await Thought.findOne({ where: { id: id}, raw: true });

        return response.render("thoughts/edit", { thought });
    },

    async uptadeThought(request, response) {
        const { id } = request.params
        const { title, description } = request.body

        const thought = await Thought.update(
            {
                title, description
            },
            {
                where: {id: id}
            }
        );

        try{
            if(thought) {
                return reponse.redirect("/thoughts/dashboard");
            }
        }catch(error){
            console.error(error);
        }
    },

    async deleteThought(request, response) {
        const { id } = request.params

        const thought = await Thought.destroy({ where: { id: id } });

        try{
            if(thought) {
                return response.redirect("/thoughts/dashboard");
            }
        }catch(error) {
            console.error(error);
        }
    },
}