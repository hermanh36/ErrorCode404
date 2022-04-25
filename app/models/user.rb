class User < ApplicationRecord
    validates :username, :email, :session_token, uniqueness:true, presence:true
    validates :password, length: {minimum:6}, allow_nil: true
    validates :first_name, :last_name, presence: true
    
    #FIGVAPER
    before_validations :ensure_session_token

    attr_reader :password
    def self.find_by_credentials(username,email,password)
        user = User.find_by(username: username) || User.find_by(email: email)
        if user
           return user.isPassword?(password)
        else
            return allow_nil
        end
    end

    def is_password?(password)
        password_obj = BCrypt.new(self.password_digest)
        return password_obj.is_password?(password)
    end

    def password(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
        self.save
    end

    def self.generate_session_token
       SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

end
