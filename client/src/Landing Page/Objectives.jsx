


import React from 'react';

const objectives = [
    {
        title: `To provide a safe space for all non-religious Kenyans`,
        info: `In Kenya, where religious beliefs are deeply ingrained in many aspects of society, creating a safe space for non-religious individuals can be a significant.This is through:
Community Support: Establishing support groups or communities for atheists and non-religious people can provide a network where individuals can share experiences, find mutual support, and discuss life without religion in a predominantly religious society.
Awareness and Education: Educating the public about atheism and non-religious life perspectives can help reduce misunderstandings and stigma. This might include public talks, educational programs, and collaboration with media to provide a more balanced view of non-religious people.
Advocacy for Rights: Advocating for the rights of non-religious individuals to ensure they are not discriminated against based on their lack of religious belief. This can involve legal action, lobbying for legislative changes, and working with human rights organizations to protect the rights of atheists.
Interbelief Dialogue: Participating in interfaith and interbelief dialogues to promote understanding and tolerance among different belief groups. By engaging in respectful conversation, atheists can help foster a more inclusive society.
Online Platforms: Creating online forums and social media platforms where non-religious Kenyans can connect, share resources, and organize. These platforms can serve as a virtual safe space, particularly for those who may not be able to participate in person due to geographic or social constraints.`,
    },
    {
        title: `To encourage skepticism and rationality`,
        info: `Encouraging skepticism and rationality is a common objective among atheists, focusing on fostering critical thinking and questioning accepted beliefs without sufficient evidence.This is through:
Education Programs: Implementing or supporting educational initiatives that emphasize critical thinking, scientific literacy, and skepticism in evaluating claims. This can include workshops, seminars, and collaborative projects with educational institutions.
Public Campaigns: Running public awareness campaigns that encourage individuals to question and critically assess not just religious beliefs but all sorts of claims, including pseudoscience, superstitions, and misinformation.
Debate and Discussion Forums: Organizing public debates, discussion groups, and forums where challenging topics are openly discussed. These platforms can help individuals practice critical thinking and expose them to different viewpoints.
Media and Content Creation: Producing content—articles, podcasts, videos—that delve into topics involving critical thinking, the scientific method, and the importance of evidence-based reasoning.
Collaborations with Skeptic Organizations: Partnering with skeptic and secular organizations to broaden the reach of programs that promote rational thinking. This can enhance the resources available and create a larger community of like-minded individuals.`,
    },
    {
        title: `To promote rational and scientific approaches to knowledge`,
        info: `Promoting rational and scientific approaches to knowledge is central to many atheist and secular movements. This is through:
Science Education: Enhancing science education by supporting initiatives that improve the curriculum, providing resources to schools, or organizing events that stimulate interest in science among students. This can include science fairs, guest lectures, and educational outreach programs.
Public Engagement: Organizing public lectures, demonstrations, and discussions that showcase scientific methods and findings. These can help demystify science and illustrate its relevance to everyday life.
Media and Communication: Creating or sponsoring content that highlights scientific discoveries and the importance of empirical evidence. This could be through blogs, videos, podcasts, or collaborations with scientists and educators to reach a broader audience.
Policy Advocacy: Engaging in policy advocacy to promote science-based decision-making at all levels of government. This involves lobbying for policies that support scientific research and evidence-based public policy, and opposing legislation that undermines scientific integrity or promotes pseudoscience.
Collaboration with Scientific Communities: Partnering with universities, research institutions, and scientific organizations to foster public understanding of science. These partnerships can facilitate access to current scientific knowledge and experts.
Critical Thinking Skills: Offering workshops or courses that teach critical thinking skills, logical reasoning, and the scientific method. These skills empower individuals to evaluate information and claims independently.`,
    },
    {
        title: `To advocate for rational humanist approaches to morality`,
        info: `Advocating for the separation of religion and government is a central goal for many atheists, as it promotes secularism and ensures that public policy and governance are free from religious bias. Here’s how they might work toward this:
Legal Advocacy: Engaging in legal challenges to enforce and uphold constitutional provisions that separate church and state. This can involve supporting lawsuits that challenge religious symbols in public spaces or government endorsements of religious events.
Policy Lobbying: Lobbying legislators and other government officials to prevent the passing of laws based on religious doctrines and to encourage the enactment of policies that reinforce secular governance. This includes advocating for neutral laws that apply equally to all, regardless of their religious beliefs.
Public Education Campaigns: Running educational campaigns to inform the public about the importance of separating religion from government. This might involve explaining how secularism benefits society, including fostering equality and protecting minority rights.
Coalition Building: Forming coalitions with other like-minded organizations, including other secularist groups, civil rights organizations, and sometimes religious groups that also support the separation principle. These coalitions can amplify their advocacy efforts.
Participation in Public Discourse: Engaging in public discourse through media appearances, opinion pieces, and public speaking to argue for the benefits of a secular state and to counter misinformation about the role of secularism in society.
Monitoring and Reporting: Keeping a vigilant eye on governmental actions that may infringe on the principle of separation of religion and state, and reporting these instances to the public or appropriate authorities.`,
    },
    {
        title: `To advocate for the separation of religion and government`,
        info: `Advocating for the separation of religion and government is a central goal for many atheists, as it promotes secularism and ensures that public policy and governance are free from religious bias. This is through:
Legal Advocacy: Engaging in legal challenges to enforce and uphold constitutional provisions that separate church and state. This can involve supporting lawsuits that challenge religious symbols in public spaces or government endorsements of religious events.
Policy Lobbying: Lobbying legislators and other government officials to prevent the passing of laws based on religious doctrines and to encourage the enactment of policies that reinforce secular governance. This includes advocating for neutral laws that apply equally to all, regardless of their religious beliefs.
Public Education Campaigns: Running educational campaigns to inform the public about the importance of separating religion from government. This might involve explaining how secularism benefits society, including fostering equality and protecting minority rights.
Coalition Building: Forming coalitions with other like-minded organizations, including other secularist groups, civil rights organizations, and sometimes religious groups that also support the separation principle. These coalitions can amplify their advocacy efforts.
Participation in Public Discourse: Engaging in public discourse through media appearances, opinion pieces, and public speaking to argue for the benefits of a secular state and to counter misinformation about the role of secularism in society.
Monitoring and Reporting: Keeping a vigilant eye on governmental actions that may infringe on the principle of separation of religion and state, and reporting these instances to the public or appropriate authorities.`,
    },
];

const Objectives = () => {
    return (
        <div className="mx-auto p-5 rounded  ml-5 mr-5">
            <h2 className="text-2xl font-bold mb-5 text-center mr-5 lm-5">Objectives</h2>
            <div className="">
                {objectives.map((objective, index) => (
                    <div 
                        key={index} 
                        className=" p-10 mb-6 ml-10 mr-10 shadow-full  bg-white border-t-2 border-l-2 border-gray-600 rounded-tr-xl rounded-bl-xl shadow-lg flex flex-col"
                    >
                        <h3 className="text-gray-600 text-center text-lg underline mb-4">
                            {objective.title}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-line">
                            {objective.info}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Objectives;

