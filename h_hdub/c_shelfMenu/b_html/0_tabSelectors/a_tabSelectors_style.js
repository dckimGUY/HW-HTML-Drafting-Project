shelfMenuHTML.tabSelectors.style = `
<style>
.button_         {
image-rendering  : crisp-edges;
image-rendering  :   pixelated;
background-color : transparent;
                 }
.button_:focus   {
outline: none;
                 }
.input_          {
position         :    absolute;
box-sizing       :  border-box;
font-size        :        16px;
border           :        none;
margin           :        none;
padding-right    :        16px;
resize           :        none;
background-color : transparent;
text-align       :       right;
color            :       black;
                 }
.input_:focus    {
outline: none;
background-color : rgba(255,255,128,0.25);
                 }
.textarea_       {
position         :    absolute;
box-sizing       :  border-box;
font-size        :        16px;
border           :        none;
margin           :        none;
padding          :        none;
resize           :        none;
background-color : transparent;
                 }
.textarea_:focus {
outline: none;
background-color : rgba(255,255,128,0.17);
                 }
.button_tab1                  { position: absolute; border: none; margin: none; padding: none; left:      5px; top:      0px; width:     30px; height:     32px;
                                background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAACIgNEUoPGY5MY9WO99xJtmgZu7DmvvyNpnlUGq+MDeUbktpL1JLJDI8OT8/dDBggltu4WOb/1/N5Mvb/P///5utt4R+h2lqallWUnZCiqwyMtlXY9d7uo+XSopvMCH5BAkKAAAALAAAAAAeACAAAAUlICCOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcukKAQA7");        }
.button_tab1:focus            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFSSAgjmRpnmiqrmzrvnAsz/Ra3PhdA8Pi/4MdLxcUAnJG0W+RPOKayOQS+kxGjVNr1XgVZrlbYbe29IlzYRk6HRu43+6mfE6v10IAIfkECQoAAAAsCwAHAAgAFAAABSzgIo7iUJzoAJgp4JKuixYxMNdwfOsoPtY7WS+WE56Aw9fP2JvNSKSBdCoNAQAh+QQJCgAAACwLAAcACAAUAAAFLWAhjuJAlsCwrMsAvOQLjzLALnUs6++d0ztgj/UTFQs1X9A4i91up9FgSp2GAAA7");  }
.button_tab1:hover            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFSSAgjmRpnmiqrmzrvnAsz/Ra3PhdA4Pj/4MdLxcUAnJG0c+RPOKayOQS+kxGjVNr1XgVZrlbYbe29IlzYRk6HRu43+6mfE6v10IAIfkECQoAAAAsCwAHAAgAFAAABSygI47iUJzoAJgp4JKuixYxMNdwfOsoPtY7WS+WE56Aw9fP2JvNSKSBdCoNAQAh+QQJCgAAACwLAAcACAAUAAAFLWAhjuJAlsDgrM4AvOQLjzLAOnUs6++d0ztgj/UTFQs1X9A4i91up9FgSp2GAAA7");  }
.button_tab1:active           { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFSSAgjmRpnmiqrmzrvnAsz/Ra3PhdAwPj/4MdLxcUAnJG0Y+RPOKayOQS+kxGjVNr1XgVZrlbYbe29IlzYRk6HRu43+6mfE6v10IAIfkECQoAAAAsCwAHAAgAFAAABSwgI47iUJzoAJgp4JKuixYxMNdwfOsoPtY7WS+WE56Aw9fP2JvNSKSBdCoNAQAh+QQJCgAAACwLAAcACAAUAAAFLWAhjuJAlsDArMwAvOQLjzLAMnUs6++d0ztgj/UTFQs1X9A4i91up9FgSp2GAAA7"); }



.button_tab2                  { position: absolute; border: none; margin: none; padding: none; left:     37px; top:      0px; width:     30px; height:     32px;
                                background-image: url("data:image/gif;base64,R0lGODdhHgAgALMAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH5BAkKAAAALAAAAAAeACAAAAQhEMhJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu714EADs=");        }
.button_tab2:focus            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFbCAgjmRpnmiqrmzrvnAsz7RJ3Pgt5jnr8ASH6McT+gxIg3GYVL56JahLOqKymibsE2fjbnVRr0tLIresALQKrU6ZRe8VW3ym7+yreHyNb5+AJIBXTUlwhEgsQGCKBD4Oj5BGkZE1lZaXmJkvIQAh+QQJCgAAACwGAAcAEgAUAAAFUCAhjiIAkKRjrKxjquzqOqn51iZp27od76YfbwQ8EYclYC/IKgpzx93SmJRGAU9fE0koTqfQKna7y4KpXa43GluV2+geao4Koxz4PP6lz4cAACH5BAkKAAAALAYABwASABQAAAVRoCGOIgCQpEOsrGOq7OrCsvnGrkna9m7HPBPwxwoChrqR0ScsBpFHJw/K7CmJKyMU2sxaS8EqN+rtErTS05XHjJXJRbdTvkJd7SKHfq9/8fchADs=");  }
.button_tab2:hover            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFbCAgjmRpnmiqrmzrvnAsz7TZ3Pgt5jnr8A2H6McT+hbIhXGYVL56JahLOqKymibsE2fjbnVRr0tLIresALQKrU6ZRe8VW3ym7+yreHyNb5+AJIBXTUlwhEgsQGCKDT4Oj5BGkZE1lZaXmJkvIQAh+QQJCgAAACwGAAcAEgAUAAAFUCAhjiIAkKSzrKxjquzqOqn51iZp27od76YfbwQ8EYclYC/IKgpzx93SmJRGAU9fE0koTqfQKna7y4KpXa43GluV2+geao4Koxz4PP6lz4cAACH5BAkKAAAALAYABwASABQAAAVR4CKOIgCQpEOsrGOq7OrCsvnGrkna9m7HPBPwxwoChrqR0ScsBpFHJw/K7CmJKyMU2sxaS8EqN+rtErTS05XHjJXJRbdTvkJd7SKHfq9/8fchADs=");  }
.button_tab2:active           { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFbCAgjmRpnmiqrmzrvnAsz7RJ3Pgt5jnr8ASH6McT+gRIgXGYVL56JahLOqKymibsE2fjbnVRr0tLIresALQKrU6ZRe8VW3ym7+yreHyNb5+AJIBXTUlwhEgsQGCKBD4Oj5BGkZE1lZaXmJkvIQAh+QQJCgAAACwGAAcAEgAUAAAFUCAhjiIAkKQjrKxjquzqOqn51iZp27od76YfbwQ8EYclYC/IKgpzx93SmJRGAU9fE0koTqfQKna7y4KpXa43GluV2+geao4Koxz4PP6lz4cAACH5BAkKAAAALAYABwASABQAAAVRoCCOIgCQpEOsrGOq7OrCsvnGrkna9m7HPBPwxwoChrqR0ScsBpFHJw/K7CmJKyMU2sxaS8EqN+rtErTS05XHjJXJRbdTvkJd7SKHfq9/8fchADs="); }





.button_tab3                  { position: absolute; border: none; margin: none; padding: none; left:     69px; top:      0px; width:     30px; height:     32px;
                                background-image: url("data:image/gif;base64,R0lGODdhHgAgALMAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH5BAkKAAAALAAAAAAeACAAAAQhEMhJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu714EADs=");        }
.button_tab3:focus            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFjSAgjmRpnmiqrmzrvnAsz7RY3PgN5PnO66PAYkgMAITEoRGZNJKYC+exGaSaeiTsSFtKdonfIcpLIo/MJa4PuMWNwWX4WR5e1O8ntd59QgP8fnNicYOCdnl8bWw2iXiGjpB/dJKFaY1rBZaLhoVJnZ51Xp5go5U/OqeZqU8Bra5Lr65Hsa01tre4uborIQAh+QQJCgAAACwCAAcAGgAUAAAFcOAijiJAkuYpBmoAsKcLk3JhFy7w3ri+37lUySdcEItEVHJ0VOp4RyhRqnNWmcvhVbs1Zr3PW1Q8JXebWJ/VivyWbWP4u+Cuq9PtOzcPoIblPn5sg2kqeoUnfTxii4yNBSolkUaTAZaXli+Yl5qbASEAIfkECQoAAAAsAgAHABoAFAAABW7gIo4iQJLmKQZF6wYA67awPNckDMT5zo+6VMknXBCLxNlRmXQRUc/REbqjVqXR4Y7p426dPisyawxjzdpr2gtge8Xw8xhdpjdbS3BXP1fX/WRTcnMzeF9chQVFKColjY9Gj4tAAZWWNZeWMZmVIQA7");  }
.button_tab3:hover            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFjSAgjmRpnmiqrmzrvnAsz7So3PgN5PnO66PAYkgMAITEoRGZNJKYC+exGaSaeiTsSFtKdonfIcpLIo/MJa4PuMWNwWX4WR5e1O8ntd59QgP8fnNicYOCdnl8bWw2iXiGjpB/dJKFaY1rCpaLhoVJnZ51Xp5go5U/OqeZqU8Bra5Lr65Hsa01tre4uborIQAh+QQJCgAAACwCAAcAGgAUAAAFcOAijiJAkuYpBmoAsKcLk7JiKy7w3ri+37lUySdcEItEVHJ0VOp4RyhRqnNWmcvhVbs1Zr3PW1Q8JXebWJ/VivyWbWP4W+Guq9PtOzcPoIblPn5sg2kqeoUnfTxii4yNCiolkUaTAZaXli+Yl5qbASEAIfkECQoAAAAsAgAHABoAFAAABW7gIo4iQJLmKQZK6wYA67awPNckDMT5zo+6VMknXBCLxNlRmXQRUc/REbqjVqXR4Y7p426dPisyawxjzdpr2gtge8Xw8xhdpjdbS3BXP1fX/WRTcnMzeF9chQpFKColjY9Gj4tAAZWWNZeWMZmVIQA7");  }
.button_tab3:active           { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFjSAgjmRpnmiqrmzrvnAsz7SY3PgN5PnO66PAYkgMAITEoRGZNJKYC+exGaSaeiTsSFtKdonfIcpLIo/MJa4PuMWNwWX4WR5e1O8ntd59QgP8fnNicYOCdnl8bWw2iXiGjpB/dJKFaY1rCZaLhoVJnZ51Xp5go5U/OqeZqU8Bra5Lr65Hsa01tre4uborIQAh+QQJCgAAACwCAAcAGgAUAAAFcOAijiJAkuYpBmoAsKcLk3JiJy7w3ri+37lUySdcEItEVHJ0VOp4RyhRqnNWmcvhVbs1Zr3PW1Q8JXebWJ/VivyWbWP4O+Guq9PtOzcPoIblPn5sg2kqeoUnfTxii4yNCSolkUaTAZaXli+Yl5qbASEAIfkECQoAAAAsAgAHABoAFAAABW7gIo4iQJLmKQZJ6wYA67awPNckDMT5zo+6VMknXBCLxNlRmXQRUc/REbqjVqXR4Y7p426dPisyawxjzdpr2gtge8Xw8xhdpjdbS3BXP1fX/WRTcnMzeF9chQlFKColjY9Gj4tAAZWWNZeWMZmVIQA7"); }




.button_tab4                  { position: absolute; border: none; margin: none; padding: none; left:    101px; top:      0px; width:     30px; height:     32px;
                                background-image: url("data:image/gif;base64,R0lGODdhHgAgALMAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH5BAkKAAAALAAAAAAeACAAAAQhEMhJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu714EADs=");        }
.button_tab4:focus            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFhiAgjmRpnmiqrmzrvnAsz/So3PgN5LjI66THYEh8AB7Coig5RJqYA+OIOCBRU7lS1tZDXYNEazP1FVenQ9WW1N21T2V0GqAkh0vfO/bt6629eiNMdGMqcXKHJ39cPCyJhFRnhoGCkVJqfIxAk4+RK5GUkHN7P1qlKUipqSWqqzWvsLGysy8hACH5BAkKAAAALAMABwAZABQAAAVs4CCOIkCOgHkOz/oATzu+MBnDSq7Qqa6kPR1QVRqSjCjgcSgbIFlD3zD4AwqfzmmSmFVuvcXZVDq+XrFTrlr7TTWJPOs56sul1+zTfZnn0+1pD3VxYF19hoVFh2l1c1SAWH5cbTGVlVOWl0MhACH5BAkKAAAALAMABwAZABQAAAVs4CCOIkCOgHkOj+K+D/C0cEq7s0zGqVr2pJ5vIBwKg72XongT1oCoYjQ1pVatRGw2+SoClKkn9HeMXo1SFNLZZXbF42355EWn6V5wXumqr4UPJzx3cnNkbHpFfF4rh1qFQ3+RjjOVlUyWOUIhADs=");  }
.button_tab4:hover            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFhiAgjmRpnmiqrmzrvnAsz/SI3PgN5LjI66THYEh8AB7Coig5RJqYA+OIOCBRU7lS1tZDXYNEazP1FVenQ9WW1N21T2V0GqAkh0vfO/bt6629eiNMdGMqcXKHJ39cPCyJhFRnhoGCkVJqfIxAk4+RK5GUkHN7P1qlKUipqSWqqzWvsLGysy8hACH5BAkKAAAALAMABwAZABQAAAVs4CCOIkCOgHkOz/oATzu+MBnDSI7QqY6kPR1QVRqSjCjgcSgbIFlD3zD4AwqfzmmSmFVuvcXZVDq+XrFTrlr7TTWJPOs56sul1+zTfZnn0+1pD3VxYF19hoVFh2l1c1SAWH5cbTGVlVOWl0MhACH5BAkKAAAALAMABwAZABQAAAVs4CCOIkCOgHkOD+K+D/C0cEq7s0zGqVr2pJ5vIBwKg70XongT1oCoYjQ1pVatRGw2+SoClKkn9HeMXo1SFNLZZXbF42355EWn6V5wXumqr4UPJzx3cnNkbHpFfF4rh1qFQ3+RjjOVlUyWOUIhADs=");  }
.button_tab4:active           { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFhiAgjmRpnmiqrmzrvnAsz/RY3PgN5LjI66THYEh8AB7Coig5RJqYA+OIOCBRU7lS1tZDXYNEazP1FVenQ9WW1N21T2V0GqAkh0vfO/bt6629eiNMdGMqcXKHJ39cPCyJhFRnhoGCkVJqfIxAk4+RK5GUkHN7P1qlKUipqSWqqzWvsLGysy8hACH5BAkKAAAALAMABwAZABQAAAVs4CCOIkCOgHkOz/oATzu+MBnDRV7QqV6kPR1QVRqSjCjgcSgbIFlD3zD4AwqfzmmSmFVuvcXZVDq+XrFTrlr7TTWJPOs56sul1+zTfZnn0+1pD3VxYF19hoVFh2l1c1SAWH5cbTGVlVOWl0MhACH5BAkKAAAALAMABwAZABQAAAVs4CCOIkCOgHkOT+G+D/C0cEq7s0zGqVr2pJ5vIBwKg71XoXgT1oCoYjQ1pVatRGw2+SoClKkn9HeMXo1SFNLZZXbF42355EWn6V5wXumqr4UPJzx3cnNkbHpFfF4rh1qFQ3+RjjOVlUyWOUIhADs="); }




.button_tab5                  { position: absolute; border: none; margin: none; padding: none; left:    133px; top:      0px; width:     30px; height:     32px;
                                background-image: url("data:image/gif;base64,R0lGODdhHgAgALMAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH5BAkKAAAALAAAAAAeACAAAAQhEMhJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu714EADs=");        }
.button_tab5:focus            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFYSAgjmRpnmiqrmzrvnAsz/QZ3Hgg5rjbNIfgoSECCn8w4YGklOVIz5hxOTrOhMwgrbfjypoA6xUb1m570dm0PKyxwTXezf0m16ZBIp1HFympdH99cjpuP4dIfYqLjI2OIiEAIfkECQoAAAAsBwAHABAAFAAABUrgIY4HAJBj05CNuaYtEMyBadK1TdrnyL8lnShmo/GMvF5QuRSKTKmkDIlM7nZSoJKYxFWlqKcUGh67vFww1sxsjr3stnisqquSIQAh+QQJCgAAACwHAAcAEAAUAAAFSuAhjgcAkGPTBGzQmGurmqRJj/aJ27UdBzlZTlfiiYZE43HYAgKEw94uiusNf0/WC0m0IlFLbrPFhaG2ZVTZNl7fplxwkauqz3IhADs=");  }
.button_tab5:hover            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFYSAgjmRpnmiqrmzrvnAsz/Tp3Lgj5rjbNIfgoSECCn8w4YGklOVIz5hxOTrOhMwgrbfjypoA6xUb1m570dm0PKyxwTXezf0m16ZBIp1HFympdH99cjpuP4dIfYqLjI2OIiEAIfkECQoAAAAsBwAHABAAFAAABUrgIY4HAJBj05CNuaYt4MyOadK1TdrnyL8lnShmo/GMvF5QuRSKTKmkDIlM7nZSoJKYxFWlqKcUGh67vFww1sxsjr3stnisqquSIQAh+QQJCgAAACwHAAcAEAAUAAAFSuAhjgcAkGPTOKzTmGurmqRJj/aJ27UdOzlZTlfiiYZE43HYAgKEw94uiusNf0/WC0m0IlFLbrPFhaG2ZVTZNl7fplxwkauqz3IhADs=");  }
.button_tab5:active           { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFYSAgjmRpnmiqrmzrvnAsz/S53Pgi5rjbNIfgoSECCn8w4YGklOVIz5hxOTrOhMwgrbfjypoA6xUb1m570dm0PKyxwTXezf0m16ZBIp1HFympdH99cjpuP4dIfYqLjI2OIiEAIfkECQoAAAAsBwAHABAAFAAABUrgIY4HAJBj05CNuaYtsMyLadK1TdrnyL8lnShmo/GMvF5QuRSKTKmkDIlM7nZSoJKYxFWlqKcUGh67vFww1sxsjr3stnisqquSIQAh+QQJCgAAACwHAAcAEAAUAAAFSuAhjgcAkGPTLOzSmGurmqRJj/aJ27UdLzlZTlfiiYZE43HYAgKEw94uiusNf0/WC0m0IlFLbrPFhaG2ZVTZNl7fplxwkauqz3IhADs="); }



.button_tab6                  { position: absolute; border: none; margin: none; padding: none; left:    165px; top:      0px; width:     30px; height:     32px;
                                background-image: url("data:image/gif;base64,R0lGODdhHgAgALMAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4ACH5BAkKAAAALAAAAAAeACAAAAQhEMhJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu714EADs=");        }
.button_tab6:focus            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFjCAgjmRpnmiqrmzrvnAcC7Qgn3WN57TI979ToZAriIi1ISCIypGcx2IK6tONhsoU0jZK3qxVbnU87YXFS54K6r1Ky2ZwV74D0tNmra79vJsEW0Q4Q2hNCFgIhT4IiSw0jImKS4ySJUSQgDiULQKYho2OnpqgK495fZSVc2olTFpYWCawWTe1tre4ubkhACH5BAkKAAAALAIABQAXABYAAAVsICCOZDkKqGCuZeq+KgCrcFG4hXintvyKLlJQhwOmhMeRrUe8CW851gkRA1KRxml1aOQKqDEBlAQdW68ytBCh9l250/btbV63fT8THL/vVv1JLYFERXqDgCx9eYYojI2Oj4CRJ4sAS5cmlzYhACH5BAkKAAAALAIABQAXABYAAAVwICCOZDkKqGCuJVoUaYyK8iwgOCK8O1yIviAAhZsNi6SbbgRL/YY31UknBb6egGYVumMljTQwNHwCx77nsNFJ0nbV0pQpDedu60w5uyVH0/18Mit/dn2Bd25vh3OEZWJwd46Rgox/NZOUVlcvJpsvIQA7");  }
.button_tab6:hover            { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFtyAgjmRpnmiqrmzrvnAcO8kiyOchHIl+OoJFbSdKAHVAwBC4OBUKAtqiICoMp1ShjZbS2UjbxKhwTFBRV1KwR3o+VdbkiHmO2Q5qIUnOUwVvIjtGJD1rDipbgDZTbUZBdSdpAH8md2IqUjdRRCVreHBeAIuQIl6AfjxMlyWOTSuLPTUnQj4rV5Qmf4crcTsCpCKqLYtBaKEsf305ji2quyXEeipIf65qZc8obtsm22844OHi4+TlIQAh+QQJCgAAACwCAAUAFwAWAAAFnyAgjmQ5CofgmGyZOMmRLKgq0GJKp6t+C4XCIpYoiAqyYRBAhB1EtQXJ9jz+DkbAEEYaykjB5ZEmPTmALRKRlFRXX6Pd6JzqRgWj10w0K4JhMFlaPzkqJj9lfDIrTgkmXo4jBTUAP4InPCVbfYldfSU2O3iHdJpEbSYwQyVIPw6XmDcmeqssi5F2pSxUszJfs5ArsWc4JT5nYGFhJspBIQAh+QQJCgAAACwCAAUAFwAWAAAFnSAgjmQ5Jk5ymGwpHILzoiotpkeyoMCe74XC4iUoiAowWRAgGDpFOh2JtjrWDkaAbEhyCkjB5TG1mOayLRGx+yI11WXRb5RLkeq1UTOmhqEBBTJ+dHk9UiVRcXBtSV8lQzBgNjV/UHUlW3uKbDKIOZ8JLFFVdJp8Jo0lSDQLlZY8LoKOJrImOz4trCZEnbswkFM+No81diNhyCbIQSEAOw==");  }
.button_tab6:active           { background-image: url("data:image/gif;base64,R0lGODdhHgAgAMQAAAAAAIuJgxAcUrSFzRh1ve7qMYvW7nN5c6y6aloAAKSqpPb/7v8A/wCh7sXCxYs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAHgAgAAAFtyAgjmRpnmiqrmzrvnAcOwkjyOchHIl+OgJGbSdKAHVAwBDIOBUKAhqjICoMp1ShjZbS2UjbxKhwTFBRV1KwR3o+VdbkiHmO2Q5qIUnOUwVvIjtGJD1rDipbgDZTbUZBdSdpAH8md2IqUjdRRCVreHBeAIuQIl6AfjxMlyWOTSuLPTUnQj4rV5Qmf4crcTsCpCKqLYtBaKEsf305ji2quyXEeipIf65qZc8obtsm22844OHi4+TlIQAh+QQJCgAAACwCAAUAFwAWAAAFnyAgjmQ5CofgmGyZOMmRMKgq0GJKp6t+C4UCI5YoiAqyYRBAhB1ENQbJ9jz+DkbAEEYaykjB5ZEmPTmALRKRlFRXX6Pd6JzqRgWj10w0K4JhMFlaPzkqJj9lfDIrTgkmXo4jBTUAP4InPCVbfYldfSU2O3iHdJpEbSYwQyVIPw6XmDcmeqssi5F2pSxUszJfs5ArsWc4JT5nYGFhJspBIQAh+QQJCgAAACwCAAUAFwAWAAAFnSAgjmQ5Jk5ymGwpHILzoiotpkfCoMCe74UC4yUoiAowWRAgGDpFOh2JtjrWDkaAbEhyCkjB5THFmOayLRGx+yI11WXRb5RLkeq1UTOmhqEBBTJ+dHk9UiVRcXBtSV8lQzBgNjV/UHUlW3uKbDKIOZ8JLFFVdJp8Jo0lSDQMlZY8LoKOJrImOz4trCZEnbswkFM+No81diNhyCbIQSEAOw=="); }



.button_crop                  { position: absolute; border: none; margin: none; padding: none; left:    -2px; top:      486px; width:     16px; height:     16px;
                                background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAE5JREFUGJV1j0EKACAIBD0J4qH//7bVXMtDBcUME6SIjSVg17thBsOI4Vx8oF4FDYs2XdD8i+D1FMlxVnE47lOQYbK4XD8d7CleznHH+BvAfAkF0YtPCwAAAABJRU5ErkJggg==");        }
.button_crop:focus            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAE5JREFUGJV1j0EKACAIBD0J4qH//7bVXMtDBcUME6SIjSVg17thBsOI4Vx8oF4FDYs2XdD8i+D1FMlxVnE47lOQYbK4XD8d7CleznHH+BvAfAkF0YtPCwAAAABJRU5ErkJggg==");  }
.button_crop:hover            { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAExJREFUGJV1j0EKACAIBE30/19uNdfyUEExwwQpssYSsNrdMINhZOF0PjCtgoZFmy5o/kWwP0VynFUcjvsUZJgsLtdPB2uKl3PcMf4GKY8CPMi1yQUAAAAASUVORK5CYII=");  }
.button_crop:active           { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAMFBMVEUAAAAA/wAQHFK0hc0Ydb3u6jGL1u5zeXOsumpaAACkqqT2/+7/AP8Aoe7FwsWLOADSnEQEAAAAEHRSTlMA////////////////////wFCLQwAAAE5JREFUGJV1j0EKACAIBPXgQej/72011/JQQTHDBCmiYwnY190wg2FEcRofLK+ChkWbLmj+RbA9RXKcVRyO+xRkmCwu108He4qXc9wx/gb8PgWf2TaQxwAAAABJRU5ErkJggg=="); }
</style>
`;