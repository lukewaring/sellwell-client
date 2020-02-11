<label>
                        Account ID:
                        <input onChange={e => this.handleChange(e)} type="text" name="account_id" value={this.state.account_id} />
                    </label>
                    <br></br>
                    <label>
                        Opportunity Name:
                        <input onChange={e => this.handleChange(e)} type="text" name="name" value={this.state.name} />
                    </label>
                    <br></br>
                    <label>
                        Open Date (YYYY-MM-DD):
                        <input onChange={e => this.handleChange(e)} type="text" name="open_date" value={this.state.open_date} />
                    </label>
                    <br></br>
                    <label>
                        Close Date (YYYY-MM-DD):
                        <input onChange={e => this.handleChange(e)} type="text" name="close_date" value={this.state.close_date} />
                    </label>
                    <br></br>
                    <label>
                        Stage (New/Follow-Up/Negotiations/Won):
                        <input onChange={e => this.handleChange(e)} type="text" name="stage" value={this.state.stage} />
                    </label>
                    <br></br>
                    <label>
                        Value ($):
                        <input onChange={e => this.handleChange(e)} type="text" name="value" value={this.state.value} />
                    </label>
                    <br></br>
                    <label>
                        Priority (High/Medium/Low):
                        <input onChange={e => this.handleChange(e)} type="text" name="priority" value={this.state.priority} />
                    </label>
                    <br></br>
                    <label>
                        Notes:
                        <input onChange={e => this.handleChange(e)} type="text" name="notes" value={this.state.notes} />
                    </label>
                    <br></br>
                        <input type="submit" value="Submit" />