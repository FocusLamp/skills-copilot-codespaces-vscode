function skillsMember() {
    // This is a private function
    var skills = ['JavaScript', 'React', 'Node'];
    return {
        getSkills: function() {
            return skills;
        },
        addSkill: function(skill) {
            skills.push(skill);
        }
    }
}