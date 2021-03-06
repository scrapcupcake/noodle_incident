class User < ActiveRecord::Base
  def self.find_or_create_from_auth_hash(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.auth_hash = auth.to_json
    end
  end
end
