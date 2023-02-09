import React from 'react'
import bulb from '../../images/Gifs/bulb.gif'
import './styleSkills.css'
import DevIcon from "devicon-react-svg";
import { Button } from 'react-bootstrap';
import $ from 'jquery';

const TechnicalSkills = () => {
    const showSet = (e, p) => {
        if (p === 'tech') {
            $('.frameWorks').hide(500);
            $('.techSkills').show(500);
            $('.ideSet').show(500);
        } else if (p === 'framework') {
            $('.techSkills').hide(500);
            $('.ideSet').hide(500);
            $('.frameWorks').show(500);
        } else {
            $('.frameWorks').hide(500);
            $('.techSkills').hide(500);
            $('.ideSet').show(500);
        }
    }
    return (
        <>
            <div className='Top'>
                <div className='row'>
                    <h2>Skills</h2>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='container px-4'>
                        <div className='row'>
                            <div className='btn col-md-4 techSkills d-flex justify-content-center'>
                                <Button className='buttonSkills' onClick={event => showSet(event, 'tech')}>Technical Skills</Button>
                            </div>

                            <div className='btn col-md-4 techSkills d-flex justify-content-center'>
                                <Button className='buttonSkills' onClick={event => showSet(event, 'framework')}>Frameworks</Button>
                            </div>

                            <div className='btn col-md-4 techSkills d-flex justify-content-center'>
                                <Button className='buttonSkills' onClick={event => showSet(event, 'ide')}>IDEs</Button>
                            </div>
                        </div>

                    </div>
                    <div className='techSkills'>
                        <div className='container px-5 py-3 mx-4'>
                            <div className='row gx-5 mySkillsRow '>
                                <div className='col-md-3 p-3 mySkill'>
                                    <DevIcon icon="java" />
                                    <p className='mySkillName'>JAVA</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <img
                                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a55359db-8be9-4150-8c22-c4f54b6dfc96/df1d241-485b9236-f0ac-4804-a77d-6495d852801d.png/v1/fill/w_404,h_455,strp/c_language___black_icon_by_therealtamuno_df1d241-fullview.png"
                                        className='otherLogo'
                                        alt="C"
                                    />
                                    <p className='mySkillName'>C</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="php" />
                                    <p className='mySkillName'>PHP</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="javascript" />
                                    <p className='mySkillName'>Java Script</p>
                                </div>
                            </div>
                        </div>

                        <div className='container px-5 py-3 mx-4'>
                            <div className='row gx-5 mySkillsRow '>
                                <div className='col-md-3 p-3 mySkill'>
                                    <DevIcon icon="jquery" />
                                    <p className='mySkillName'>jQuery</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="html5" />
                                    <p className='mySkillName'>HTML</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="css3" />
                                    <p className='mySkillName'>CSS</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="python" />
                                    <p className='mySkillName'>Python</p>
                                </div>
                            </div>
                        </div>

                        <div className='container px-5 py-3 mx-4'>
                            <div className='row gx-5 mySkillsRow '>
                                <div className='col-md-3 p-3 mySkill'>
                                    <DevIcon icon="mysql" />
                                    <p className='mySkillName'>MySQL</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="msql_server" />
                                    <p className='mySkillName'>MSSQL</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <p className='mySkillName'>AJAX</p>
                                </div>
                            </div>
                        </div>

                        <div className='container px-5 py-3 mx-4'>
                            <div className='row gx-5 mySkillsRow '>
                                <div className='col-md-3 p-3 mySkill'>
                                    <DevIcon icon="apple" />
                                    <p className='mySkillName'>Bash</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="perl" />
                                    <p className='mySkillName'>Perl</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="python" />
                                    <p className='mySkillName'>Python</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="ajax" />
                                    <p className='mySkillName'>AJAX</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='frameWorks'>
                        <div className='container px-5 py-3 mx-4'>
                            <div className='row gx-5 mySkillsRow '>
                                <div className='col-md-3 p-3 mySkill'>
                                    <DevIcon icon="react" />
                                    <p className='mySkillName'>React JS</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="codeigniter" />
                                    <p className='mySkillName'>codeIgniter</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="springboot" />
                                    <p className='mySkillName'>Spring Boot</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="bootstrap" />
                                    <p className='mySkillName'>Bootstrap</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="nodejs" />
                                    <p className='mySkillName'>Node JS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='ideSet'>
                        <div className='container px-5 py-3 mx-4'>
                            <div className='row gx-5 mySkillsRow '>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="visualstudio" />
                                    <p className='mySkillName'>Visual Studio</p>
                                </div>
                                <div className='col-md-3 p-3 mySkill'>
                                    <DevIcon icon="netbeans" />
                                    <p className='mySkillName'>NetBeans</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="android" />
                                    <p className='mySkillName'>Android Studio</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="cisco" />
                                    <p className='mySkillName'>Cico Packet Tracer</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="github" />
                                    <p className='mySkillName'>GitHub</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="sublime" />
                                    <p className='mySkillName'>Sublime</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="brackets" />
                                    <p className='mySkillName'>Brackets</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="eclipse" />
                                    <p className='mySkillName'>Eclipse</p>
                                </div>
                                <div className='col-md-3 g-1 mySkill'>
                                    <DevIcon icon="eclipse" />
                                    <p className='mySkillName'>Eclipse</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnicalSkills