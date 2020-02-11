<form onSubmit={e => this.handleSubmit(e)}>
    <label>
        Account Name:
        <input onChange={e => this.handleChange(e)} type="text" name="name" value={this.state.name} />
    </label>
    <br></br>
    <label>
        Industry:
        <input onChange={e => this.handleChange(e)} type="text" name="industry" value={this.state.industry} />
    </label>
    <br></br>
    <label>
        Website:
        <input onChange={e => this.handleChange(e)} type="text" name="website" value={this.state.website} />
    </label>
    <br></br>
    <label>
        Notes:
        <input onChange={e => this.handleChange(e)} type="text" name="notes" value={this.state.notes} />
    </label>
    <br></br>
        <input type="submit" value="Submit" />
</form>
